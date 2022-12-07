// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
import "./ERC20.sol";
error Transfer__NotSuccessfull();

contract DiscreteStakingRewards {
    mapping(address => uint) public balanceOf;
    uint public totalSupply;

    IERC20 public immutable token;

    uint256 public movieCount;

    struct Movie {
        string name;
        string description;
        string image;
        string playbackId;
        address creator;
        uint256 startAt;
        uint256 endAt;
        uint256 totalStakedAmount;
    }

    // Mapping from movie id to Movies
    mapping(uint256 => Movie) public movies;
    // Mapping from movie id => staker => staked ammount
    mapping(uint256 => mapping(address => uint)) public stakedAmount;

    uint private constant MULTIPLIER = 1e18;
    uint private rewardIndex;

    mapping(address => uint) private rewardIndexOf;
    mapping(address => uint) private earned;

    constructor(address _token) {
        token = IERC20(_token);
    }

    // events

    event MovieEvent(
        uint id,
        address indexed creator,
        string name,
        string description,
        string image,
        string playbackId,
        uint256 startAt,
        uint256 endAt
    );

    event Staked(uint indexed id, address indexed stakingAddress, uint amount);

    event Unstaked(
        uint indexed id,
        address indexed stakingAddress,
        uint amount
    );

    event RewardsClaimed(uint indexed reward, address indexed claimer);

    // Add movie
    function addMovie(
        string memory _name,
        string memory _description,
        string memory _image,
        string memory _playbackId,
        uint256 _startAt,
        uint256 _endAt
    ) public {
        require(_startAt >= block.timestamp, "start at < now");
        require(_endAt >= _startAt, "end at < start at");

        movieCount++;
        movies[movieCount] = Movie({
            creator: msg.sender,
            name: _name,
            description: _description,
            image: _image,
            playbackId: _playbackId,
            startAt: _startAt,
            endAt: _endAt,
            totalStakedAmount: 0
        });

        emit MovieEvent(
            movieCount,
            msg.sender,
            _name,
            _description,
            _image,
            _playbackId,
            _startAt,
            _endAt
        );
    }

    // Get movie
    function getMovie(
        uint256 _movieId
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            address
        )
    {
        Movie storage movie = movies[_movieId];
        // emit MovieCreated()
        return (
            movie.name,
            movie.description,
            movie.image,
            movie.playbackId,
            movie.creator
        );
    }

    function updateRewardIndex() external payable {
        // uint reward args removed cause now its payable
        // rewardToken.transferFrom(msg.sender, address(this), reward); this not needed now since contract is getting ETH direclty
        require(msg.value > 0, "ETH not sent");
        rewardIndex += (msg.value * MULTIPLIER) / totalSupply;
    }

    function _calculateRewards(address account) private view returns (uint) {
        uint shares = balanceOf[account];
        return (shares * (rewardIndex - rewardIndexOf[account])) / MULTIPLIER;
    }

    function calculateRewardsEarned(
        address account
    ) external view returns (uint) {
        return earned[account] + _calculateRewards(account);
    }

    function _updateRewards(address account) private {
        earned[account] += _calculateRewards(account);
        rewardIndexOf[account] = rewardIndex;
    }

    // Stake

    function stake(uint _id) external payable {
        //
        Movie storage movie = movies[_id];
        require(block.timestamp >= movie.startAt, "not started");
        require(block.timestamp <= movie.endAt, "ended");

        movie.totalStakedAmount += msg.value;
        stakedAmount[_id][msg.sender] += msg.value;
        //address payable _to = payable(address(this));
        //bool sent = _to.send(msg.value);
        //require(sent, "Failed to send Ether");

        // transferFrom(msg.sender, address(this), msg.value);
        //_updateRewards(msg.sender);
        emit Staked(_id, msg.sender, msg.value);
    }

    function unstake(uint _id, uint _amount) external {
        require(
            balanceOf[msg.sender] - _amount >= 0,
            "Unstaking amount greater than available"
        );
        _updateRewards(msg.sender);

        Movie storage movie = movies[_id];
        require(block.timestamp >= movie.startAt, "not started");
        require(block.timestamp <= movie.endAt, "ended");

        movie.totalStakedAmount -= _amount;
        stakedAmount[_id][msg.sender] -= _amount;
        token.transferFrom(address(this), msg.sender, _amount);
        //_updateRewards(msg.sender);
        emit Unstaked(_id, msg.sender, _amount);
    }

    //     function claim() external returns(uint) {
    //         _updateRewards(msg.sender);

    //         uint reward = earned[msg.sender];
    //         if (reward > 0) {
    //             earned[msg.sender] = 0;
    //             // rewardToken.transfer(msg.sender, reward);
    //             (bool success,)= msg.sender.call{value: reward}("");
    //             if(success){
    //                 emit Rewards_claimed(reward, msg.sender);
    //             } else {
    //                 revert Transfer__NotSuccessfull();
    //             }
    //         }
    //         return reward;
    //     }
}
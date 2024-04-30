interface FollowerProps {
    image: string;
    name: string;
    userName: string;
}

const Follower: React.FC<FollowerProps> = ({ image, name, userName }) => {
    return (
        <div className="p-6 bg-blue-200">
            <img src={image} alt={`Profile of ${name}`} className="w-50 h-50 rounded-full" />
            <div className="mt-2">
                <h2 className="">{name}</h2>
                <h2>{userName}</h2>
            </div>
        </div>
    );
};

export default Follower;

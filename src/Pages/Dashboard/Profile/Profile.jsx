import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2 className=" text-center text-4xl font-bold mb-5">
        User{" "}
        <span className=" text-teal-600">Profile</span>
            </h2>
            <img className=" mx-auto max-h-52 min-w-52 rounded-full" src={ user?.photoURL} alt="" />
            <p className=" text-2xl text-center font-bold">Name: { user?.displayName}</p>
            
        </div>
    );
};

export default Profile;
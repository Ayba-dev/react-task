const UseAuth = () => {
    const user = localStorage.getItem('user')

    return !!user
};

export default UseAuth;
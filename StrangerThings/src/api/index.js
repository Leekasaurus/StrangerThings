const COHORT_NAME = "2302-ACC-ET-WEB-PT-B";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const fetchAllPost= async () => {
    try{
        //request our response object
        const response = await fetch(`${BASE_URL}/posts`);
        //we want to convert it into an object
        const result =await response.jsson();
        console.log(result.data.posts)
       return (result.data.posts);
    } catch (error){
        console.error("Error getting posts")
    }
};

export const registerUser = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({
                user: {
                    username,
                    password,
                },
            }),
        });
        console.result = await response.json();
            console.log("Register User", result);
           return result;
    }catch (error) {
        console.error("There was an error/ POST Registering user, error");
    };

    export const loginUser = async (username, password) => {
        try{
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({
                    user: {
                        username,
                        password,
                    },
                }),
            });
            console.result = await response.json();
                console.log("Register User", result);
                return result;
        }catch (error) {
            console.error("There was an error/ POST Registering user, error");
        };


}

    export const createPost = async () => {
        try{

        } catch(error) {
            console.error()
        }
    }

    export const deletePost = async () => {
        try{

        } catch (error) {
            console.error()
        }
    }

    export const messages = async () => {
        try{

        } catch (error) {
            console.error
        }
    }

    export const user = async () => {
        try{

        } catch (error) {
            console.error
        }
    }

};
const express = require('express');
const app = express();

const mockUserData = [
    {name: "Mark"},
    {name: "Jill"}
]

app.get('/users', (req, res) => {
    res.json(
        {
            sucess: true,
            message: "Successfully get users",
            users: mockUserData
        }
    )
})

app.listen(8000,function(){
    console.log("server is running")
})

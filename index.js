
// import express
import express from "express";
const app = express();


// Chapter 1 Serve 

// define the route for the app
app.get('/', (req, res) => {
    // http://127.0.0.1:3000?name=David => {}{ name : 'David} query http:url?query=value&otherquery=value
    const q = req.query;
    console.log(q);
    res.send(`Ciao, ${q.name}`);
});
app.get('/another-path', (req, res) => {
    res.send('Ciao on another path');
});

//param returns object, /: declaration > ez lesz a z obj key
app.get('/users/:userId', (req, res) => {
    http://127.0.0.1:3000/user/1 => {userId : 1}
    res.send(`The user id is: ${req.params.userId}`);
    console.log(req.params)
    //{ userId: '1' }
});

// CHAPTER 2 Response

app.get('/math/:op', (req, res) => {
    //http://127.0.0.1:3000/math/divide?x=10&y=2
    const x = parseFloat(req.query.x); //?
    const y = parseFloat(req.query.y);

    const { op } = req.params; // htttp:url/matt/this
    console.log(req.params)
    // { op: 'divide' }

    const result = op === "add" ? x + y :
        op === "subtract" ? x - y :
            op === "multiply" ? x * y :
                op === "divide" ? x / y : false;

    // eredmény visszaadása
    // res.send(result ? `The result is ${result}` : `Unrecognizable operation name`);

    const resultObject = {
        numbers: {
            x: x,
            y: y
        },
        operation: op,
        result: result ? result : 'Wrong operator'
    }

    res.send(resultObject);
})





app.listen(3000, () => {
    console.log(`Open this link in your browser: http://127.0.0.1:3000`)
})
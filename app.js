
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const fetch = require('node-fetch-cjs');
const fetch = require('isomorphic-fetch');




const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Signup Route
app.post('/signup', (req, res) => {
  const { firstName, lastName, email } = req.body;

  // Make sure fields are filled
  if (!firstName || !lastName || !email) {
    res.redirect('/fail.html');
    return;
  }

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  fetch('https://us14.api.mailchimp.com/3.0/lists/afa47ca7fc', {
    method: 'POST',
    headers: {
      Authorization: 'auth 8bd260e22ccf76c92e61bd3d0909e0e9-us14'
    },
    body: postData
  })
    .then(res.statusCode === 200 ?
      res.redirect('/success.html') :
      res.redirect('/fail.html'))
    .catch(err => console.log(err))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));







// const express = require('express');
// const request = require('request');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));

// app.post('/signup', (req, res) => {
//   const { firstName, lastName, email } = req.body;

//   if (!firstName || !lastName || !email) {
//     res.redirect('/fail.html');
//     return;
//   }

//   const data = {
//     members: {
//       email_address: email,
//       status: 'subscribed',
//       merge_fields: {
//         FNAME: firstName,
//         LNAME: lastName,
//       },
//     },
//   };

//   const postData = JSON.stringify(data);

//   const options = {
//     url: 'https://us14.api.mailchimp.com/3.0/lists/afa47ca7fc',
//     method: 'POST',
//     headers: {
//       Authorization: 'auth 8bd260e22ccf76c92e61bd3d0909e0e9-us14',
//     },
//     body: postData,
//   };

//   request(options, (err, response, body) => {
//     if (err) {
//       res.redirect('/fail.html');
//     } else {
//       if (response.statusCode === 200) {
//         res.redirect('/success.html');
//       } else {
//         res.redirect('/fail.html');
//       }
//     }
//   });
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, console.log(`Server started on ${PORT}`));














// const express = require('express');
// const request = require('request');
// const bodyParser = require('body-parser');
// const path = require('path');
// const https = require("https");
// // const fetch = require('node-fetch');

// const app = express();

// app.use(bodyParser.urlencoded({extended:true}))

// //Static folder should be in public
// app.use(express.static(path.join(__dirname,'public')))

// // form Router
// app.post('/signup', (req,res) => {
  
//   const {firstName, lastName, email} =req.body;

//   console.log(req.body)

//   if(!firstName || !lastName || !email){
//     res.redirect('/fail.html')
//     return  
//   }

//   const data = {
//     members:{
//       email_address: email,
//         status: 'subscribed',
//         merge_fields: {
//           FNAME: firstName,
//           LNAME: lastName
//       }
//     }
//   }

//   const postData =JSON.stringify(data);

//   fetch('https://us21.api.mailchimp.com/3.0/lists/dcef831c60', {
//     method: 'POST',
//     headers: {
//       Authorization: 'auth 6b1d397aa9dda9799fd0f945b90d0023-us21'
//     },
//     body: postData
//   })
//     .then(res.statusCode === 200 ?
//       res.redirect('/success.html') :
//       res.redirect('/fail.html'))
//     .catch(err => console.log(err))
// })

// const PORT = process.env.PORT || 3000;

// app.listen(PORT,console.log(`Server started on ${PORT}`))




// // API-KEY
// // 6b1d397aa9dda9799fd0f945b90d0023-us21

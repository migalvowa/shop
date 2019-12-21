import React, { useState, useEffect } from "react";
import firebase, { todosRef } from "./config/firebase";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.css";

import HomePage from "./components/pages/HomePage/HomePage";
import ItemPage from "./components/pages/ItemPage/ItemPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/item">
          <ItemPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



// ---



// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .required("first name required"),
//   lastName: Yup.string()
//     .required("last name required"),
//   email: Yup.string()
//     .email("Invalid email")
//     .required("Required"),
// });

// const App = () => {
//   return (
//     <div className="login-form">
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: ""
//         }}
//         validationSchema={SignupSchema}
//         onSubmit={values => {
//           console.log(values);
//         }}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <Field
//               name="firstName"
//               placeholder="first name"
//               className="input"
//             />
//             {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}

//             <Field
//               name="lastName"
//               placeholder="last name"
//               className="input"
//             />
//             {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}

//             <Field
//               name="email"
//               placeholder="email"
//               className="input"
//             />
//             {errors.email && touched.email && <div>{errors.email}</div>}

//             <button type="submit">Submit</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default App;



// ---



// class App extends React.Component {
//   state = {
//     list: [],
//     user: null,
//     inputValue: "",
//   };

//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         console.log("Logged in; user.uid:", user.uid);
//         this.setState({ user: user.uid });

//         // firebase
//         //   .database()
//         //   .ref("todos")
//         //   .on("child_added", snapshot => {
//         //     console.log(snapshot.val(), snapshot.key);
//         //   });

//         firebase
//           .database()
//           .ref("todos")
//           .on("value", snapshot => {
//             console.log(snapshot.val());
//             this.setState({
//               list: Object.entries(snapshot.val()).map(([key, val]) => {
//                 return { key, ...val };
//               }),
//             });
//           });
//       } else {
//         console.log("Logout");
//         this.setState({ user: null });
//       }
//     });
//   }

//   addItem = () => {
//     todosRef.push().set({ text: this.state.inputValue });
//     // todosRef.push().set({ text: this.state.inputValue });
//     this.setState({ inputValue: "" });
//   };

//   render() {
//     const { user, list, inputValue } = this.state;
//     return (
//       <div className="App">
//         <input
//           type="text"
//           value={inputValue}
//           placeholder="item text"
//           onChange={e => {
//             this.setState({ inputValue: e.target.value });
//           }}
//         />
//         <button onClick={this.addItem}>Add item</button>
//         {user && (
//           <section>
//             {list.map((item, i) => (
//               <div key={i}>{item.text}</div>
//             ))}
//           </section>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

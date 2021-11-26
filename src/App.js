import './App.css';
import { useState } from 'react';

// import "./styles.css";
function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const firstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChange = (event) => {
    setLastName(event.target.value);
  };

//   const fakeGuests = ['John', 'Harry', 'Hugo', 'Stephen', 'Brendan'];

//   const fakeGuestsObj = [
//     {
//       id: '1',
//       firstName: 'John',
//       lastName: 'Smith',
//       attending: true,
//     },
//     {
//       id: '2',
//       firstName: 'Harry',
//       lastName: 'Kane',
//       attending: true,
//     },
//     {
//       id: '3',
//       firstName: 'Hugo',
//       lastName: 'Loris',
//       attending: true,
//     },
//     {
//       id: '4',
//       firstName: 'Stephen',
//       lastName: 'Browne',
//       attending: true,
//     },
//     {
//       id: '5',
//       firstName: 'Brendan',
//       lastName: 'Doran',
//       attending: true,
//     },
//   ];

//   function useStateWithArray() {
//     const [fakeGuests, setFakeGuests] = useState(fakeGuestsObj);
//   }
//   return (
//     <div className="App">

//         <button onClick={}>Attending</button> */}
//       <ul>
//         {fakeGuests.map((fakeGuest) => {
//           return (
//             <li key={fakeGuest.id}>
//               {fakeGuest.firstName}
//               {fakeGuest.lastName}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default App;

// const fakeGuests = ['John', 'Harry', 'Hugo', 'Stephen', 'Brendan']

const fakeGuestsObj = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    attending: true,
  },
  {
    id: 2,
    firstName: 'Harry',
    lastName: 'Kane',
    attending: true,
  },
  {
    id: 3,
    firstName: 'Hugo',
    lastName: 'Loris',
    attending: true,
  },
  {
    id: 4,
    firstName: 'Stephen',
    lastName: 'Browne',
    attending: true,
  },
  {
    id: 5,
    firstName: 'Brendan',
    lastName: 'Doran',
    attending: true,
  },
];

export default function useStateWithArray() {
  const [fakeGuests, setFakeGuests] = useState(fakeGuestsObj);
  const handleDeleteGuest = (id) => {
    const upDatedArray = [...fakeGuests];
    for (let i = 0; i < fakeGuests.length; i++) {
      console.log(fakeGuests[i].id);
      if (fakeGuests[i].id === id) {
        console.log(true);
        upDatedArray.splice(id - 1, 1);
      }
    }
    console.log(upDatedArray);
    setFakeGuests(upDatedArray);
  };
  // export default function App() {
  return (
    <div className="useStateWithArray">
        {/* <div> */}
       {  <h1>Guest list</h1>

        <input
           placeHolder="First Name"
          value={firstName}s
           onChange={firstNameChange}
         />
         <br />
         <input
           placeHolder="Last Name"
           value={lastName}
           onChange={lastNameChange}/>
      // </div>
      <ul>
        {fakeGuests.map((fakeGuest) => {
          return (
            <li key={fakeGuest.id}>
              {fakeGuest.firstName}
              <br />
              {fakeGuest.lastName}
              <button
                id={fakeGuest.id}
                onClick={() => handleDeleteGuest(fakeGuest.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      {/* <button
        onClick={() => {
          // const filteredGuests = fakeGuests.filter((fakeGuest) => {
          //   return fakeGuests.firstName !== 'Harry';
          // });
          // filteredGuests([fakeGuests][0]);
          setFakeGuests([fakeGuests[0]]);
        }}
      >
        Remove Guest
      </button> */}
    </div>
  );
}

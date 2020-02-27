import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/actions";

export default function Header() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  return (
    <div>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <Icon>create</Icon>
        </Grid>
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="Write your task here"
            value={value}
            onChange={e => {
              setValue(e.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={event => {
                event.preventDefault();
                if (value.trim()) {
                  dispatch(
                    addProduct({
                      userId: localStorage.getItem("id"),
                      productId: 1,
                      description: value,
                      amount: 5,
                      quantity: 3,
                    })
                  );
                  setValue("");
                }
              }}
              onKeyPress={e => {
                console.log("here");
                if (e.keyCode === 13 || e.which === 13) {
                  e.preventDefault();
                  if (value.trim()) {
                    dispatch(
                      addProduct({
                        userId: localStorage.getItem("id"),
                        productId: 1,
                        description: value,
                        amount: 5,
                        quantity: 3,
                      })
                    );
                    setValue("");
                  }
                }
              }}
            >
              Submit
            </Button>
          </label>
        </Grid>
      </Grid>
    </div>
  );
}

// export default connect()(Header);
// export default function Header() {
//   const value = useChange();
//   const key = useKey(value.value);
//   const submit = useSubmit(value.value);

//   return (
//     <div>
//       <Grid container spacing={1} alignItems="flex-end">
//         <Grid item>
//           <Icon>create</Icon>
//         </Grid>
//         <Grid item>
//           <TextField
//             id="input-with-icon-grid"
//             label="Write your task here"
//             {...value}
//             {...key}
//           />
//         </Grid>
//         <Grid item>
//           <label htmlFor="contained-button-file">
//             <Button
//               variant="contained"
//               color="primary"
//               component="span"
//               {...submit}
//             >
//               Submit
//             </Button>
//           </label>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// function useSubmit(newValue) {
//   const dispatch = useDispatch();
//   const [value, setValue] = useState("");
//   function handleSubmit() {
//     dispatch({
//       type: "ADD",
//       task: newValue
//     });
//     setValue("");
//   }
//   return {
//     onClick: handleSubmit
//   };
// }

// function useChange() {
//   const [value, setValue] = useState("");
//   function handleChange(e) {
//     setValue(e.target.value);
//   }
//   return {
//     value: value,
//     onChange: handleChange
//   };
// }

// function useKey(newValue) {
//   const dispatch = useDispatch();
//   const [value, setValue] = useState("");
//   function keyPressed(e) {
//     if (e.keyCode === 13 || e.which === 13) {
//       e.preventDefault();
//       dispatch({
//         type: "ADD",
//         task: newValue
//       });
//       setValue("");
//     }
//   }
//   return {
//     onKeyPress: keyPressed
//   };
// }

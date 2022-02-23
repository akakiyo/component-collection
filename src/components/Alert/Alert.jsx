// import { useAlert } from "react-alert";
// import { confirm } from "./ConfirmTemplate";

// function Alert() {
//   const customAlert = useAlert();
//   const handleClose = () => {
//     console.log("閉じる");
//   };
//   return (
//     <>
//       <button onClick={() => alert("結合処理に失敗")}>今までのアラート</button>
//       <button
//         onClick={() =>
//           customAlert.error("結合処理に失敗しました", {
//             onClose: () => {
//               handleClose();
//             },
//           })
//         }
//       >
//         error
//       </button>
//       <button
//         onClick={() =>
//           confirm({ confirmation: "本当に削除してもよろしいですか?" })
//         }
//       >
//         warning
//       </button>
//       <button
//         onClick={() =>
//           customAlert.success("送付先データに結合しました", {
//             onClose: () => {
//               handleClose();
//             },
//           })
//         }
//       >
//         success
//       </button>
//     </>
//   );
// }

// export default Alert;

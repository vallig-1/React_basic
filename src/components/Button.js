//M2
const Button = ({handleClick, title}) => (
    <button onClick={handleClick} className="btn btn-primary">
        {title}
    </button>
);



//M1
// const Button = (props) => (
//     <button onClick={props.handleClick} className="btn btn-primary">
//         {props.title}
//     </button>
// );
export default Button;
//Instead of always using button in app.js, we made a common button file to make it simpler
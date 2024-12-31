import Color from 'color';

const Input = ({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText})=>{

 return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
<label htmlFor="">Add Color Label : </label>
<input 
    autoFocus
    type="text"
    placeholder="Add Color Name"
    required
    value={colorValue}
    onChange={(e) => {
        setColorValue(e.target.value);
        setHexValue(() => {
          try {
            return Color(e.target.value).hex();
          } catch {
            return '';
          }
        });
      }}
/>
<button type="button"
onClick={()=>setIsDarkText(!isDarkText)}
>
Toggle Text Color
</button>
    </form>

)
}

export default Input
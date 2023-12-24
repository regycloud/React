/* eslint-disable react/prop-types */
export default function Tombol({name, fn, dis}) {
    return (
        <button onClick={fn} disabled={dis ? true: false}> {name} </button>
    )
}
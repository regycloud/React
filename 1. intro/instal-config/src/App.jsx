import { useState } from 'react'
import Tombol from './components/Tombol';

function App() {
    const [nilai, setNilai] = useState(0);

            function tambahNilai() {
                nilai > 8 ? setNilai('done') : setNilai(nilai+1);
            }
            function kuranginNilai() {
                nilai == 0 ? setNilai('done') : setNilai(nilai-1);
            }
            function resetNilai() {
                setNilai(0);
            }
            
            return (
                <div>
                <Tombol name="-" fn={kuranginNilai} dis={nilai == 'done' ? 'disabled' : ''}/>
                <span> {nilai} </span>
                <Tombol name="+" fn={tambahNilai} dis={nilai == 'done' ? 'disabled' : ''} />
                <br />
                <br />
                <Tombol name="Reset Nilai" fn={resetNilai} dis={nilai !== 'done' ? 'disabled' : ''} /> 
                    </div>
            );
}

export default App

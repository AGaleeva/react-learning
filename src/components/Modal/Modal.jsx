import "./styles.css"
import multi, { sum, minus, division } from "./helpers" 

export default function Modal({ children }) {
  const sumResult = sum(3, 5);
  const multiRes = multi(3, 5);
  return <div className="modal-component">
    <p>Summa: {sumResult}</p>
    <p>Multiplication: {multiRes}</p>
    {children}
  </div>
}

// export default Modal; - можно прописать перед объявлением фукнции
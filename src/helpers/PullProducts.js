
import Stock from "../data/Stock"

    const PullProducts = () =>{
        return new Promise ((resolve, reject) => {
            setTimeout(() =>{
            resolve (Stock)
            reject ("rechazado")
            }, 0)
    })
}
export default PullProducts
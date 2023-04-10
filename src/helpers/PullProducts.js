
import Stock from "../data/Stock"

    const PullProducts = () =>{
        return new Promise ((resolve, reject) => {
            setTimeout(() =>{
            resolve (Stock)
            reject ("rechazado")
            }, 2000)
    })
}
export default PullProducts
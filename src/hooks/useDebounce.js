function useDebounce(cb, delay = 800){
    let timerid;
    return(...args) => {
        clearTimeout(timerid);
        timerid = setTimeout(()=>{
            cb(...args);
        },delay);
    }
}
export default useDebounce
export const Loader = ({showLoader}) => {
  return (
    <div className={`loader ${!showLoader && 'hideLoader'}`}>
        <img src="/kerovit_logo.png" alt="" />
    </div>
  )
}

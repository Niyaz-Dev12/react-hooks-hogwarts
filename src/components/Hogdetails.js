import React from 'react'

function Hogdetails({hoger}) {
  return (
    <div><p className="hoggyText" >Speciality:{hoger.specialty}</p>
     <p className="hoggyText" >Weight: {hoger.weight}</p>
     <p className="hoggyText"  >Greased:{hoger.greased?"Greased":"Not Greased"}</p>
     <p className="hoggyText achievementText" >Achievement: {hoger["highest medal achieved"]}</p></div>
  )
}

export default Hogdetails

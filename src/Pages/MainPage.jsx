import React from 'react'
import MainCompoments from '../Components/MainCompoments'
import WhatWeWork from "../Components/WhatWeWork"
import ServicesTitle from "../Components/ServicesTitle"
import ServiceCart from "../Components/ServiceCart"
import Facilites from "../Components/Facilites"
import ReacentTreatment from "../Components/ReacentTreatment"
function MainPage() {
  return (
    <div>
      <MainCompoments></MainCompoments>
      <ServicesTitle></ServicesTitle>
      <ServiceCart></ServiceCart>
      <Facilites></Facilites>
      <WhatWeWork></WhatWeWork>
      <ReacentTreatment></ReacentTreatment>
    </div>
  )
}

export default MainPage

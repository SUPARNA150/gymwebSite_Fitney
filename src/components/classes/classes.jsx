import Service from '../service/service/'

const Classes = () => {
    return (
    <div>
      <h1 className='service-heading'>OUR FITNESS CLASSES</h1>
      <div className='service-part'>
      <Service serviceName="Body Building" description="We have a number of different teams within our agency that specialise in many areas." imageLink="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Service serviceName="Physical Fitness" description="Analysis of your customers is key in responding to your promotional needs." imageLink="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Service serviceName="Group Exercise" description="Our teams are up to date with the media trends to prove themselves in this industry." imageLink="https://images.unsplash.com/photo-1536922246289-88c42f957773?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
    </div>
  )
}

export default Classes

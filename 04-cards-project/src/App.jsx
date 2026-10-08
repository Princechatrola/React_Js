import React from 'react'
import Card from './components/card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/zhyu9lpDCIFi8FJMBl9N_WYMoDLOuXNfO3PfCmLzT8Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0x/MTc1MzExLnBuZz9m/PXdlYnAmdz0xMjg",
    nameOfCompany: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    nameOfCompany: "Meta",
    datePosted: "5 days ago",
    post: "React.js Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Mwb1yqL2AlcYq-fIla-HxpMy869WI3IH1JMaoNNqL20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby12ZWN0b3It/NDY4NjAxMTAuanBn",
    nameOfCompany: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    nameOfCompany: "Apple",
    datePosted: "3 days ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/gtEqWi7RJOX_WMq88-Soryp4wbWAqsE7fUIOIAnbBMg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTcv/Mzk2LzgxNC9zbWFs/bC9uZXRmbGl4LW1v/YmlsZS1hcHBsaWNh/dGlvbi1sb2dvLWZy/ZWUtcG5nLnBuZw",
    nameOfCompany: "Netflix",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://imgs.search.brave.com/wYqNxLGRzAuE8359cHbwwO8nFJzwMC4KEFRf9pvPuT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/MzM5Lzk2Mi9zbWFs/bC9taWNyb3NvZnQt/aWNvbi1sb2dvLXN5/bWJvbC1mcmVlLXBu/Zy5wbmc",
    nameOfCompany: "Microsoft",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/RXAr7jOeV6kDj-pMh1c5681vuigiImlEmp8El0UMK7g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/MTE4LzU0NS9zbWFs/bC9hZG9iZS1sb2dv/LXN0YW5kYXJkLWlj/b24tYXBwLWxvZ28t/ZWRpdGFibGUtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1wcmVt/aXVtLXNvY2lhbC1t/ZWRpYS1kZXNpZ24t/Zm9yLWRpZ2l0YWwt/ZG93bmxvYWQtZnJl/ZS1wbmcucG5n",
    nameOfCompany: "Adobe",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/uber",
    nameOfCompany: "Uber",
    datePosted: "10 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/airbnb",
    nameOfCompany: "Airbnb",
    datePosted: "3 weeks ago",
    post: "Node.js Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    nameOfCompany: "NVIDIA",
    datePosted: "1 day ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  }
];

console.log(jobOpenings);
  return (
    <div className='parent'>  

      {jobOpenings.map(function(elem){
        return <Card brandLogo={elem.brandLogo} post={elem.post} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} Company={elem.nameOfCompany}/>
      })}

      
    </div>
  )
}

export default App

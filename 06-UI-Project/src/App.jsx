import React from 'react'
import Section1 from './components/section-1/section1'
import Section2 from './components/section-2/section2'

const App = () => {
const users = [
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Managing finances confidently with access to modern banking and investment tools.',
    tag:'Satisfied'
  },  
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D',
    intro:'Needs better financial solutions and personalized services to achieve goals.',
    tag:'Underserved'
  },  
  {
    img:'https://plus.unsplash.com/premium_photo-1661777467209-d1fb895cd266?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Has limited access to banking services and relies on alternative financial options.',
    tag:'Underbanked'
  }, 
  {
    img:'https://images.unsplash.com/photo-1712068944613-1ff36db16612?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Seeking affordable financial products and greater access to digital banking.',
    tag:'Underbanked'
  },
    {
    img:'https://images.unsplash.com/photo-1665504952303-43d375e47cec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Building wealth confidently with smart financial planning and investment opportunities.',
    tag:'Satisfied'
  },
  {
    img:'https://images.unsplash.com/photo-1610353458972-73d1d9313347?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Enjoying seamless banking, budgeting, and investment management in one place.',
    tag:'Satisfied'
  },
  {
    img:'https://images.unsplash.com/photo-1622497170185-5d668f816a56?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Struggling to find financial products that truly match personal needs and goals.',
    tag:'Underserved'
  },
  {
    img:'https://images.unsplash.com/photo-1626948683867-f1e940e63f0b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Seeking better access to loans, savings tools, and financial guidance.',
    tag:'Underserved'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661730121815-398e70f796b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Relies mostly on cash transactions due to limited access to banking services.',
    tag:'Underbanked'
  }
];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App

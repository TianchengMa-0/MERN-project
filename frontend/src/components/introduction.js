const myself={
    isPacked:true,
    name:'Felix',
    style:{
        color:'#e7cfc5'
    }
};
const other={
    isPacked:false,
    name:'Helix',
    style:{
        color:'red'
    }
}
const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    name: 'Percy Lavon Julian',
    profession: 'mathematician',  
  }, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];
const math=people.filter(person=>person.profession==='mathematician')
const mathName=math.map(person=>
    <li>{person.name}</li>
    
    )
export default function introduction(){
    return(
        <>
        <div>{mathName}</div>
        <div style={myself.style}>
            <span>{myself.isPacked ? myself.name + " ✔": myself.name}</span>
        </div>
        <div style={other.style}>
            <span>{other.isPacked ? other.name + " ✔": other.name}</span>
        </div>
        <div style={other.style}>
            <span>{other.name} {other.isPacked&&" ✔"}</span>
        </div>
        </>
        
    );
}
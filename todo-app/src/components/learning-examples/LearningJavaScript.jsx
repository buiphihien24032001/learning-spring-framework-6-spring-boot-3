
const person = {
    name: 'Hien Bui',
    age: 22,
    sex: 'male',
    address: {
        line1: 'Dong Da',
        district: 'Thong Nhat',
        province: 'Dong Nai',
    },
    profiles: ['twitter', 'instagram', 'linkedin'],
    printProfiles: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript() {
    return (
        <div>
            <div>Fullname: {person.name}</div>
            <div>Age: {person.age}</div>
            <div>Sex: {person.sex}</div>
            <div>Address: {person.address.line1}, {person.address.district}, {person.address.province} </div>
            <div>Profiles: {person.profiles[0]}</div>
            <div>Profiles Print: {person.printProfiles()}</div>
        </div>
    );
}
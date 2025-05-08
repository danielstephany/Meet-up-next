import MeetupList from '@/components/meetups/MeetupList'
import NewMeetupForm from '@/components/meetups/NewMeetupForm'

const mockMeetups = [
    { 
        id: 1, 
        title: "JS Meetup", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg", 
        address: "123 talla lane, tilly ca 12345"
    }
]

export default function HomePage({ meetups }){
    console.log(meetups)

    const addMeetupHandler = (meetupData) => {
        console.log(meetupData)
    }

    return (
        <>
            <MeetupList meetups={meetups}/>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </>
    )
} 

export async function getServerSideProps(context){
    // const req = context.req
    // const res = context.res

    return {
        props: {
            meetups: mockMeetups
        }
    }
}

// get props durring build
// export async function getStaticProps(){
//     return {
//         props: {
//             meetups: mockMeetups
//         },
//         // revalidate: 10 regenerates page on server every 10 seconds, use if need for incremental regeneration.
//     }
// }
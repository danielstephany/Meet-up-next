import MeetupList from '@/components/meetups/MeetupList'
import NewMeetupForm from '@/components/meetups/NewMeetupForm'

const meetups = [
    { 
        id: 1, 
        title: "JS Meetup", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg", 
        address: "123 talla lane, tilly ca 12345"
    }
]

export default function HomePage(){

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
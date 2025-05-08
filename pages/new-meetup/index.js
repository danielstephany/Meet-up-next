import NewMeetupForm from '@/components/meetups/NewMeetupForm'

export default function NewMeetupPage(){
    const addMeetupHandler = async (meetupData) => {
        console.log(meetupData)

        const res = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(meetupData)
        })
        const json = await res.json();
        console.log(json)
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}
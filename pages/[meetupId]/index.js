import MeetupDetail from '@/components/meetups/MeetupDetail'

export default function MeetupDetailsPage(){

    return (
        <MeetupDetail 
            image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
            title="First Meetup"
            address="temp address"
            description="temp description"
        />
    )
}

export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            {
                params: {meetupId: "1"}
            }
        ]
    }
}

// get props durring build
export async function getStaticProps(context){
    const meetupId = context.params.meetupId
    return {
        props: {
            title: "JS Meetup",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
            address: "123 talla lane, tilly ca 12345"
        },
        // revalidate: 10 regenerates page on server every 10 seconds, use if need for incremental regeneration.
    }
}
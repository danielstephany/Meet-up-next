import classes from './MeetupDetail.module.css';

export default function MeetupDetail({
    image,
    title,
    description,
    address
}) {

    return (
        <section className={classes.detail}>
            <img src={image} alt={description} />
            <h1>{title}</h1>
            <address>{address}</address>
            <p>{description}</p>
        </section>
    )
}
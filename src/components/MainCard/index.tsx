import RecentCard from "../Cards/RecentCard";

export default function MainCard() {
  return (
    <main style={ {display: 'flex', justifyContent: 'start', width: '80vw', margin: '0 auto', flexWrap: 'wrap', gap: '2vw'} }>
        <RecentCard />
    </main>
  )
}

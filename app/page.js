import Link from "next/link"
export default function Home() {
  return (
    <div>
      <Link href="/artists">Artists</Link>
      <Link href="/events">Events</Link>
      <Link href="/tags">Tags</Link>
    </div>
  )
}

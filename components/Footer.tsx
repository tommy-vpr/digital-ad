import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="flex w-full max-w-sm items-center space-x-2 my-24">
      <Input type="email" placeholder="Email" />
      <Button type="submit" className="bg-purple-800 hover:bg-purple-700">Subscribe</Button>
    </footer>
  )
}

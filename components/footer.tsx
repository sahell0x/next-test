export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="text-center">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Sahil Khan. All rights reserved.</p>
        <p className="text-sm text-muted-foreground mt-1">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}

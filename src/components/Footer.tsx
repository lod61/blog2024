export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-14 items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name
          </span>
        </div>
      </div>
    </footer>
  )
} 
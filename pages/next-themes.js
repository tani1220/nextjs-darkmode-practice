import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Home() {
    const { theme, setTheme } = useTheme()
  return (
    <div>
      <h1>next-themesプラグインの使用例</h1>
      {theme !== undefined && (
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="system">System</option>
        </select>
      )}

      <br />
      <br />

      <div>
        <Link href="/">
          <a>戻る</a>
        </Link>
      </div>
      <style jsx>{`
          select {
            font-size: 24px;
          }
          
          a {
            color: var(--fg);
            text-decoration: none;
            border-bottom: 1px solid var(--fg);
          }

          div {
              text-align:center;
              padding:3rem;
          }
      `}</style>
    </div>
  )
}

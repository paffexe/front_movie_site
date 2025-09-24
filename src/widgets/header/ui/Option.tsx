import { LanguageSwitcher } from "@/features/language-switcher"
import { ThemeChanger } from "@/features/theme"
import { memo } from "react"

export const Option = memo(() => {
  return (
    <div className="flex items-center gap-1 bg-amber-500 w-[292px]">
        <LanguageSwitcher/>
        <ThemeChanger/>
    </div>
  )
})

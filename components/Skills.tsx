import { Progress } from "@/components/ui/progress"

type Skill = {
  name: string
  level: number
}

const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS/Tailwind", level: 95 },
  { name: "Python", level: 75 },
]

export default function SkillsSection() {
  return (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </section>
  )
}
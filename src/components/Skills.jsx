const skills = [
'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'
]


export default function Skills() {
return (
<section className="py-20 bg-gray-100">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold">Skills</h2>
<div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
{skills.map(skill => (
<div key={skill} className="p-3 bg-white rounded shadow text-center">
{skill}
</div>
))}
</div>
</div>
</section>
)
}
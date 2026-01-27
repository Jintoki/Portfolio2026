import BackButton from '@/components/BackButton'
import AnimatedSection from '@/components/AnimatedSection'
import TabbedContent from '@/components/TabbedContent'
import AutoPlayVideo from '@/components/AutoPlayVideo'
import { getAssetPath } from '@/utils/assetPath'

// This would typically come from a CMS or database
const workData: Record<string, any> = {
  'ecommerce-redesign': {
    title: 'E-Brokerage Platform Redesign',
    subtitle: 'Questrade Pro',
    overview: 'A new trading platform reimagining what professional trading experience will look like',
    journey: "Questrade's next-generation online brokerage platform, designing core interaction systems, data-dense interfaces, and user-driven features for active traders. My work focused on balancing performance constraints, technical feasibility, and evolving user needs—while collaborating closely with product, engineering, and design systems partners.",
    role: 'Product Designer',
    duration: '1 year and 9 months',
    team: '5 designers, 5 developer teams, 2 product managers',
    hasTabs: true,
    tabs: {
      'interaction': {
        challenge: {
          title: 'The Challenge',
          content: 'Active traders depend on highly customizable workspaces, often spanning multiple widgets, layouts, and devices. Questrade Pro needed a widget management system that allowed deep personalization while maintaining platform performance and reliability.\n\nEarly in development, the existing gridster API introduced a hard technical constraint: supporting more than two widget layers caused severe performance issues. This limited layout flexibility and created fragile edge cases when users moved between devices or monitors with different screen sizes.',
        },
        research: {
          title: 'Research and Discovery',
          content: 'To ground decisions in real usage, I:\n\n• Reviewed competitor trading platforms and common trader workflows\n• Partnered closely with engineers to understand the limits of the gridster API\n• Live-tested early implementations during beta releases\n\nThrough beta testing, we observed that:\n\n• Traders expect immediate feedback when arranging their workspace\n• Unclear snapping behavior caused hesitation and trial-and-error\n• Predictability mattered more than raw freedom in layout interactions',
        },
        solution: {
          title: 'Solution',
          content: 'I designed and shipped two successive interaction models:\n\nPhase 1: Constraint-Aware Widget System\nWorking within gridster\'s limitations, I designed a two-layer widget system that maximized flexibility without triggering performance issues. This allowed the team to ship a stable, customizable layout early and validate trader behavior in real environments.\n\nPhase 2: Multi-Layer Workspace System\nAs beta usage expanded and edge cases surfaced, I escalated the limitations of the initial approach and partnered with design and engineering to define a more scalable solution.\n\nKey improvements included:\n\n• A multi-layer widget architecture\n• Widget snapping on rails for clearer alignment\n• Pre-visualized snapping states while dragging, allowing users to see how widgets would connect before releasing\n• An infinite canvas model that adapts to varying monitor sizes and device transitions\n\nSurfacing the expected snap interaction earlier significantly improved user confidence and reduced friction during workspace setup.',
        },
        results: {
          title: 'Results',
          content: '• Improved clarity and predictability of widget interactions during beta testing\n• Reduced friction when creating and adjusting complex workspaces\n• Established interaction analytics (e.g., widget linking, workspace detachment) to support future UX hypotheses and iterative improvements',
        },
        images: [
          { src: '/placeholder-interaction-1.jpg', alt: 'Widget management system interface' },
          { src: '/placeholder-interaction-2.jpg', alt: 'Multi-layer workspace visualization' },
        ],
      },
      'interface': {
        challenge: {
          title: 'The Challenge',
          content: 'Time and sales data is essential for active traders but inherently dense and fast-moving. The challenge was to design a dashboard that allowed users to analyze this data efficiently—without overwhelming them visually or compromising performance.\n\nThis feature was built entirely from the ground up and required tight coordination with backend engineering.',
        },
        research: {
          title: 'Research and Discovery',
          content: 'I collaborated closely with backend developers to align on:\n\n• Data structures and update frequencies\n• Performance implications of rendering large datasets\n• Trade-offs between real-time fidelity and UI responsiveness\n\nIn parallel, I reviewed existing platform patterns to ensure the new dashboard felt familiar and consistent within Questrade Pro.',
        },
        solution: {
          title: 'Solution',
          content: 'I designed a modular dashboard UI that leveraged repeating patterns and established interaction conventions. Working alongside the design systems designer, I translated these patterns into high-fidelity components and documented them for reuse.\n\nKey contributions:\n\n• Designed a custom data table optimized for time and sales analysis\n• Defined table behaviors including filtering, sorting, density, and visual hierarchy\n• Partnered with engineering to ensure UI decisions aligned with backend constraints\n• Documented new components and behaviors in the design system to support scalability\n\nThe feature has been shipped publicly in closed beta, with an open beta planned for Q1.',
        },
        results: {
          title: 'Results',
          content: '• Delivered a visually clear, performant dashboard for analyzing time and sales data\n• Successfully extended the design system with new, production-ready components\n• Strong internal confidence from cross-functional partners as the platform moves toward open beta',
        },
        images: [],
      },
      'features': {
        challenge: {
          title: 'The Challenge',
          content: 'User expectations evolved quickly through alpha and closed beta testing. Feature requests surfaced frequently through channels like Reddit and internal feedback, highlighting workflow gaps and opportunities for quality-of-life improvements.\n\nThese features were often smaller in scope but high-impact for daily trading workflows.',
        },
        research: {
          title: 'Approach',
          content: 'Rather than deep architectural redesigns, this work focused on:\n\n• Responsiveness to real user needs\n• Speed-to-value\n• Clear, intuitive interactions that fit naturally into existing workflows',
        },
        solution: {
          title: 'Solution',
          content: 'I designed and shipped several targeted enhancements, including:\n\n• A centralized notification hub\n• Time and sales conditions and filters\n• Order entry resizing to better support different trading styles\n\nThis section emphasizes visual artifacts, motion, and interaction clarity, using animations and UI walkthroughs to demonstrate how these features improve day-to-day trading rather than deep technical breakdowns.',
        },
        results: {
          title: 'Results',
          content: '• Addressed recurring user requests and workflow friction\n• Improved flexibility and efficiency for active traders\n• Reinforced platform trust by visibly responding to user feedback',
        },
        images: [
          { src: '/placeholder-features-1.jpg', alt: 'Notification hub interface' },
          { src: '/placeholder-features-2.jpg', alt: 'Order entry resizing feature' },
        ],
      },
      'design-organization': {
        challenge: {
          title: 'The Challenge',
          content: 'As Questrade Pro grew in scope and complexity, our design files and component library began to strain under their own weight. A rapidly expanding component set was housed in a single, monolithic file tied to a large epic, making it increasingly difficult to maintain, update, and scale.\n\nDesigners struggled with:\n\n• Slower performance and load times\n• Difficulty finding and reusing components\n• Risky, manual updates across multiple files and workspaces\n\nWithout intervention, the system was becoming unsustainable and increasingly costly to maintain.',
        },
        research: {
          title: 'Discovery and Alignment',
          content: 'Recognizing this as a systemic issue, I proactively initiated conversations with:\n\n• Product managers, to understand how epics and features were being structured\n• Developers, to align on how design artifacts mapped to implementation\n• Designers, to identify pain points in day-to-day workflows\n\nThese discussions revealed a shared need for a more modular, scalable approach to organizing design files—one that supported parallel work across teams without fragmenting the design system.',
        },
        solution: {
          title: 'Solution',
          content: 'I led the restructuring of our design file organization and component strategy by introducing a modular file architecture centered around master components.\n\nKey changes included:\n\n• Separating core components into dedicated master files\n• Linking these master components across multiple feature and workspace files\n• Establishing a clear file hierarchy that mirrored product domains and workflows\n• Defining documentation patterns that made ownership and usage clearer for the team\n\nThis approach allowed designers to work independently while still benefiting from centralized updates—where changes to a master component could propagate consistently across the platform.',
        },
        results: {
          title: 'Results',
          content: '• Significantly improved performance and usability of design files\n• Reduced duplication and manual rework across teams\n• Enabled faster iteration by allowing master updates to apply across multiple files and workspaces\n• Created a more sustainable foundation for a fast-growing component library\n\nThe change was well received by the design team and helped stabilize a system that had become difficult to scale under rapid product growth.',
        },
        images: [
          { src: '/placeholder-design-org-1.jpg', alt: 'Design file organization structure' },
          { src: '/placeholder-design-org-2.jpg', alt: 'Component library architecture' },
        ],
      },
    },
  },
  'work-2': {
    title: 'Project Title 2',
    subtitle: 'Project Subtitle',
    overview: 'Brief description of your second project.',
    role: 'Product Designer',
    duration: '4 months',
    team: '2 designers, 3 engineers',
    challenge: {
      title: 'The Challenge',
      content: 'Describe the challenge here.',
    },
    research: {
      title: 'Research & Discovery',
      content: 'Describe your research process here.',
    },
    solution: {
      title: 'Solution',
      content: 'Describe your solution here.',
    },
    process: [],
    results: {
      title: 'Results',
      content: 'Describe the results here.',
      metrics: [],
    },
    images: [],
  },
  'work-3': {
    title: 'Project Title 3',
    subtitle: 'Project Subtitle',
    overview: 'Brief description of your third project.',
    role: 'Product Designer',
    duration: '3 months',
    team: '1 designer, 2 engineers',
    challenge: {
      title: 'The Challenge',
      content: 'Describe the challenge here.',
    },
    research: {
      title: 'Research & Discovery',
      content: 'Describe your research process here.',
    },
    solution: {
      title: 'Solution',
      content: 'Describe your solution here.',
    },
    process: [],
    results: {
      title: 'Results',
      content: 'Describe the results here.',
      metrics: [],
    },
    images: [],
  },
}

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { id: 'ecommerce-redesign' },
    { id: 'work-2' },
    { id: 'work-3' },
  ]
}

export default function WorkDetail({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const work = workData[id]

  if (!work) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Work not found</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 px-8 pb-16 max-w-5xl mx-auto">
      <BackButton />

      {/* Hero Section */}
      <AnimatedSection className="mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#E5E5E5]">
          {work.title}
        </h1>
        <p className="text-2xl text-gray-400 mb-8">{work.subtitle}</p>
        <p className="text-lg text-[#E5E5E5] leading-relaxed max-w-3xl">
          {work.overview}
        </p>
        {id === 'ecommerce-redesign' && (
          <div className="mt-8">
            <AutoPlayVideo 
              src={getAssetPath('/qpro-hero-1920.webm')} 
              width="100%"
            />
          </div>
        )}
      </AnimatedSection>

      {/* Project Details */}
      <AnimatedSection delay={0.1} className="grid md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-gray-700">
        <div>
          <h3 className="font-semibold text-gray-400 mb-2">Role</h3>
          <p className="text-[#E5E5E5]">{work.role}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-400 mb-2">Duration</h3>
          <p className="text-[#E5E5E5]">{work.duration}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-400 mb-2">Team</h3>
          <p className="text-[#E5E5E5]">{work.team}</p>
        </div>
      </AnimatedSection>

      {/* Overall Journey */}
      {work.journey && (
        <AnimatedSection delay={0.15} className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-[#E5E5E5]">The overall journey</h2>
          <p className="text-lg text-[#E5E5E5] leading-relaxed whitespace-pre-line">
            {work.journey}
          </p>
        </AnimatedSection>
      )}

      {/* Tabbed Content for E-Brokerage */}
      {work.hasTabs && work.tabs ? (
        <div className="mb-16">
          <TabbedContent tabs={work.tabs} />
        </div>
      ) : (
        <>
          {/* Challenge Section */}
          <AnimatedSection delay={0.2} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">{work.challenge.title}</h2>
            <p className="text-lg text-[#E5E5E5] leading-relaxed">
              {work.challenge.content}
            </p>
          </AnimatedSection>

          {/* Image Section */}
          {work.images && work.images.length > 0 && (
            <AnimatedSection delay={0.3} className="mb-16">
              <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Image: {work.images[0].alt}</span>
              </div>
            </AnimatedSection>
          )}

          {/* Research Section */}
          <AnimatedSection delay={0.4} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">{work.research.title}</h2>
            <p className="text-lg text-[#E5E5E5] leading-relaxed">
              {work.research.content}
            </p>
          </AnimatedSection>

          {/* Solution Section */}
          <AnimatedSection delay={0.5} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">{work.solution.title}</h2>
            <p className="text-lg text-[#E5E5E5] leading-relaxed mb-8">
              {work.solution.content}
            </p>

            {/* Process Steps */}
            {work.process && work.process.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {work.process.map((step: any, index: number) => (
                  <div key={index} className="p-6 bg-gray-800 rounded-lg">
                    <h3 className="font-semibold text-[#E5E5E5] mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            )}
          </AnimatedSection>

          {/* Additional Images */}
          {work.images && work.images.length > 1 && (
            <AnimatedSection delay={0.6} className="mb-16 space-y-8">
              {work.images.slice(1).map((img: any, index: number) => (
                <div
                  key={index}
                  className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-400">Image: {img.alt}</span>
                </div>
              ))}
            </AnimatedSection>
          )}

          {/* Results Section */}
          <AnimatedSection delay={0.7} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#E5E5E5]">{work.results.title}</h2>
            <p className="text-lg text-[#E5E5E5] leading-relaxed mb-8">
              {work.results.content}
            </p>

            {work.results.metrics && work.results.metrics.length > 0 && (
              <div className="grid md:grid-cols-3 gap-6">
                {work.results.metrics.map((metric: any, index: number) => (
                  <div key={index} className="p-6 bg-black text-white rounded-lg">
                    <div className="text-4xl font-bold mb-2">{metric.value}</div>
                    <div className="text-gray-300">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </AnimatedSection>
        </>
      )}
    </main>
  )
}

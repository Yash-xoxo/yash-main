'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2, Terminal, Calendar, User, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function RedHatLinuxDistros() {
  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    if (navigator.share) {
      try {
        await navigator.share({ title: 'RHEL 9 and Other Distros', url })
      } catch {}
    } else {
      await navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-[#222831] text-[#EEEEEE]">
      <header className="border-b border-[#393E46]/50 bg-[#222831]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button asChild variant="ghost" className="text-[#00ADB5] hover:text-[#EEEEEE]">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio</Link>
          </Button>
          <Button variant="outline" size="sm" className="border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5] hover:text-white" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#00ADB5]/20 text-[#00ADB5] border-[#00ADB5]/30">
              <Terminal className="mr-2 h-4 w-4" /> Linux in the Enterprise
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Red Hat RHEL 9 and <span className="text-[#00ADB5]">Other Distros</span>
            </h1>
            <p className="text-xl text-[#EEEEEE]/70 mb-8 leading-relaxed">
              Comparing enterprise-ready distributions and where each fits: RHEL, Ubuntu, SUSE, Debian, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#EEEEEE]/60">
              <div className="flex items-center"><User className="mr-2 h-4 w-4" /> Yash Gupta</div>
              <div className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> Aug 2025</div>
              <div className="flex items-center"><Clock className="mr-2 h-4 w-4" /> 7 min read</div>
            </div>
          </motion.div>

          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl mx-auto prose prose-invert prose-lg mt-12">
            
            <h2 className="text-3xl font-bold text-[#00ADB5] mb-6">Technical Deep Dive: Enterprise Linux Distros</h2>
            
            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">1. RHEL 9: The Enterprise Standard</h3>
              <h4 className="text-xl font-semibold mb-3">Core Strengths:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>Stability:</strong> 5-year full support + 5-year maintenance (10-year lifecycle)</li>
                <li><strong>Security:</strong> SELinux with pre-configured profiles (PCI-DSS, HIPAA), fapolicyd for application whitelisting, and SCAP Compliance Checker</li>
                <li><strong>Ecosystem:</strong> Certified for 3,000+ hardware/software vendors (SAP, Oracle DB, NVIDIA)</li>
                <li><strong>Tooling:</strong> Red Hat Insights (predictive analytics), Ansible Automation Platform, OpenShift integration</li>
              </ul>
              <p className="text-[#EEEEEE]/80"><strong>Ideal For:</strong> Regulated industries (finance, govt), legacy application support, air-gapped environments</p>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">2. Ubuntu LTS (22.04/24.04): The Cloud & DevOps Powerhouse</h3>
              <h4 className="text-xl font-semibold mb-3">Key Advantages:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>Developer Experience:</strong> Snap packages, Azure/AWS/GCP-optimized images, Livepatch (zero-downtime kernel updates)</li>
                <li><strong>Cloud Native:</strong> Best-in-class Kubernetes support (MicroK8s, EKS), MAAS for bare-metal provisioning</li>
                <li><strong>Community:</strong> 40,000+ packages, Canonical's Ubuntu Pro (10-year security, CIS hardening)</li>
              </ul>
              <p className="text-[#EEEEEE]/80"><strong>Use Cases:</strong> CI/CD pipelines, public cloud workloads, AI/ML development (NVIDIA CUDA certified)</p>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">3. SUSE Linux Enterprise (SLE 15/16): The Hybrid & Edge Specialist</h3>
              <h4 className="text-xl font-semibold mb-3">Differentiators:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>SAP Dominance:</strong> Certified for SAP HANA (70% market share), SUSE Manager for multi-distro compliance</li>
                <li><strong>Edge Computing:</strong> K3s (lightweight Kubernetes), immutable OS (MicroOS), transactional updates</li>
                <li><strong>Hybrid Cloud:</strong> Rancher Prime for Kubernetes management across clouds</li>
              </ul>
              <p className="text-[#EEEEEE]/80"><strong>Target Users:</strong> Manufacturing (IIoT), SAP-centric enterprises, complex hybrid environments</p>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">4. Debian Stable (Bookworm): The Purist's Foundation</h3>
              <h4 className="text-xl font-semibold mb-3">Core Philosophy:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>Stability Over Freshness:</strong> 2-3 year release cycle, rigorously tested packages</li>
                <li><strong>License Compliance:</strong> 100% free software (FOSS), no proprietary blobs</li>
                <li><strong>Community Governance:</strong> Volunteer-driven, no corporate dependencies</li>
              </ul>
              <p className="text-[#EEEEEE]/80"><strong>Best Suited For:</strong> Web servers, network appliances, budget-constrained environments, "vanilla" Linux base</p>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">5. Fedora (v40/41): The Innovation Pipeline</h3>
              <h4 className="text-xl font-semibold mb-3">Cutting-Edge Features:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>Upstream First:</strong> Testbed for RHEL (e.g., dnf5, Btrfs as default filesystem)</li>
                <li><strong>Developer Stack:</strong> Latest GNOME/KDE, Wayland by default, Toolbox for containerized dev envs</li>
                <li><strong>Security:</strong> SELinux strict mode, fwupd for firmware updates</li>
              </ul>
              <p className="text-[#EEEEEE]/80"><strong>Limitations:</strong> 13-month lifecycle, less third-party commercial support</p>
              <p className="text-[#EEEEEE]/80"><strong>Fit:</strong> Early adopters, developers needing latest toolchains (Rust, Python), container workflows</p>
            </div>

            <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Niche & Emerging Players</h3>
            <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-8">
              <li><strong>AlmaLinux/Rocky Linux:</strong> 1:1 RHEL clones (post-CentOS void). Ideal for migrations requiring binary compatibility</li>
              <li><strong>Oracle Linux:</strong> Ksplice (zero-reboot patching), optimized for Oracle DB/Exadata</li>
              <li><strong>Amazon Linux:</strong> Deep AWS integration (CloudWatch, X-Ray), optimized for EC2/EKS</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Decision Framework: Selecting Your Distro</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-[#00ADB5]/30">
                <thead>
                  <tr className="bg-[#00ADB5]/10">
                    <th className="border border-[#00ADB5]/30 p-3 text-left">Criterion</th>
                    <th className="border border-[#00ADB5]/30 p-3 text-left">RHEL</th>
                    <th className="border border-[#00ADB5]/30 p-3 text-left">Ubuntu LTS</th>
                    <th className="border border-[#00ADB5]/30 p-3 text-left">SUSE</th>
                    <th className="border border-[#00ADB5]/30 p-3 text-left">Debian</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#00ADB5]/30 p-3">Support Cost</td>
                    <td className="border border-[#00ADB5]/30 p-3">$$$ (per socket)</td>
                    <td className="border border-[#00ADB5]/30 p-3">$$ (optional Pro)</td>
                    <td className="border border-[#00ADB5]/30 p-3">$$$</td>
                    <td className="border border-[#00ADB5]/30 p-3">Free</td>
                  </tr>
                  <tr>
                    <td className="border border-[#00ADB5]/30 p-3">Compliance</td>
                    <td className="border border-[#00ADB5]/30 p-3">FIPS, STIG</td>
                    <td className="border border-[#00ADB5]/30 p-3">CIS, EAL</td>
                    <td className="border border-[#00ADB5]/30 p-3">Common Criteria</td>
                    <td className="border border-[#00ADB5]/30 p-3">Limited</td>
                  </tr>
                  <tr>
                    <td className="border border-[#00ADB5]/30 p-3">Cloud Integration</td>
                    <td className="border border-[#00ADB5]/30 p-3">Good (ROS/Azure)</td>
                    <td className="border border-[#00ADB5]/30 p-3">Best (AWS/GCP)</td>
                    <td className="border border-[#00ADB5]/30 p-3">Hybrid Focus</td>
                    <td className="border border-[#00ADB5]/30 p-3">Manual Setup</td>
                  </tr>
                  <tr>
                    <td className="border border-[#00ADB5]/30 p-3">K8s/Container Tooling</td>
                    <td className="border border-[#00ADB5]/30 p-3">OpenShift</td>
                    <td className="border border-[#00ADB5]/30 p-3">MicroK8s, Charm</td>
                    <td className="border border-[#00ADB5]/30 p-3">Rancher Prime</td>
                    <td className="border border-[#00ADB5]/30 p-3">K8s Vanilla</td>
                  </tr>
                  <tr>
                    <td className="border border-[#00ADB5]/30 p-3">Edge Readiness</td>
                    <td className="border border-[#00ADB5]/30 p-3">Moderate</td>
                    <td className="border border-[#00ADB5]/30 p-3">Good (Ubuntu Core)</td>
                    <td className="border border-[#00ADB5]/30 p-3">Best (MicroOS)</td>
                    <td className="border border-[#00ADB5]/30 p-3">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Critical Evaluation Factors:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Team Expertise:</h4>
                <p className="text-[#EEEEEE]/80">RHEL/SUSE require specialized skills; Ubuntu/Debian have broader admin familiarity</p>
              </div>
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Hardware Constraints:</h4>
                <p className="text-[#EEEEEE]/80">Legacy industrial systems → RHEL/SUSE (certified drivers). ARM edge devices → Ubuntu Core/SUSE MicroOS</p>
              </div>
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Software Stack:</h4>
                <p className="text-[#EEEEEE]/80">SAP/HANA → SUSE. .NET Core/Azure → Ubuntu. Proprietary ISV apps → RHEL (certification matters)</p>
              </div>
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Total Cost of Ownership (TCO):</h4>
                <p className="text-[#EEEEEE]/80">Include: Support subscriptions, training, downtime, compliance audits. Example: Debian's $0 license cost may incur higher operational overhead</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Strategic Recommendations</h3>
            <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-8">
              <li><strong>Multi-Cloud Deployments:</strong> Standardize on Ubuntu or RHEL for consistent tooling (Ansible/MAAS)</li>
              <li><strong>Mission-Critical Legacy:</strong> RHEL for certified stability or SUSE for SAP</li>
              <li><strong>Budget-Optimized Scalability:</strong> Debian (if in-house expertise exists) or AlmaLinux</li>
              <li><strong>Innovation Labs:</strong> Fedora or Ubuntu with bleeding-edge stacks</li>
              <li><strong>Edge/IoT:</strong> SUSE MicroOS (immutable OS) or Ubuntu Core (Snap containers)</li>
            </ul>

            <div className="bg-[#00ADB5]/10 rounded-lg p-6 border border-[#00ADB5]/30 mb-8">
              <h4 className="text-lg font-semibold mb-3">Key Trend:</h4>
              <p className="text-[#EEEEEE]/80">Immutable Infrastructure (OSTree-based systems like Fedora Silverblue, MicroOS) reduces attack surfaces – evaluate for greenfield projects</p>
            </div>

            <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Future Outlook</h3>
            <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-8">
              <li><strong>RHEL 10:</strong> Expect tighter OpenShift integration, AI-optimized kernels</li>
              <li><strong>Ubuntu:</strong> Focus on Snap sandboxing for all apps</li>
              <li><strong>SUSE:</strong> Edge/AI convergence with Rancher Prime</li>
              <li><strong>Debian:</strong> Improved cloud/container images post-Bookworm</li>
            </ul>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Final Takeaway</h3>
              <p className="text-[#EEEEEE]/80">
                Align distro choice with long-term strategy, not just technical specs. Hybrid environments benefit from 2 distros max (e.g., RHEL for core + Ubuntu for cloud). Invest in automation (Ansible/Terraform) to abstract underlying OS differences.
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  )
}

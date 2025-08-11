'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2, BookOpen, Calendar, User, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function DockerKubernetesIndustries() {
  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Docker & Kubernetes Use Cases', url })
      } catch {
        // ignore
      }
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
              <BookOpen className="mr-2 h-4 w-4" /> Container Orchestration
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Docker & Kubernetes <span className="text-[#00ADB5]">Use Cases</span> in Industries
            </h1>
            <p className="text-xl text-[#EEEEEE]/70 mb-8 leading-relaxed">
              How containers and orchestration power modern production systems across sectors.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#EEEEEE]/60">
              <div className="flex items-center"><User className="mr-2 h-4 w-4" /> Yash Gupta</div>
              <div className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> Aug 2025</div>
              <div className="flex items-center"><Clock className="mr-2 h-4 w-4" /> 9 min read</div>
            </div>
          </motion.div>

          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl mx-auto prose prose-invert prose-lg mt-12">
            
            <h2 className="text-3xl font-bold text-[#00ADB5] mb-6">I. Containerization & Orchestration: Core Technical Foundations</h2>
            
            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">A. Docker's Engine Capabilities</h3>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                <li><strong>Isolation:</strong> Kernel-level namespaces (PID, network, mount) and cgroups for resource control</li>
                <li><strong>Storage:</strong> Union filesystems (OverlayFS) for image layering; volumes for persistent data</li>
                <li><strong>Security:</strong> Rootless mode, seccomp-bpf syscall filtering, and Docker Content Trust (DCT) for signed images</li>
              </ul>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">B. Kubernetes Orchestration Mechanics</h3>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                <li><strong>Control Plane:</strong> etcd for state storage, scheduler with bin-packing algorithms</li>
                <li><strong>Networking:</strong> CNI plugins (Calico, Cilium) for pod-to-pod communication; Ingress controllers (NGINX, Traefik)</li>
                <li><strong>Auto-Scaling:</strong> Horizontal Pod Autoscaler (HPA) based on Prometheus metrics; Cluster Autoscaler for node provisioning</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#00ADB5] mb-6">II. Industry-Specific Implementations & Case Studies</h2>
            
            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">A. FinTech: High-Stakes Resilience</h3>
              <h4 className="text-xl font-semibold mb-3">Low-Latency Trading:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>Stack:</strong> Kubernetes pods deployed on bare-metal (avoiding VM overhead) with SR-IOV for network acceleration</li>
                <li><strong>Case Study:</strong> JP Morgan's Athena platform processes 1B+ daily transactions using containerized pricing engines</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Security/Compliance:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                <li><strong>Tools:</strong> Open Policy Agent (OPA) for GDPR-compliant deployments; HashiCorp Vault for secret injection</li>
                <li><strong>Pattern:</strong> Isolated "sandbox" namespaces for PCI-DSS workloads</li>
              </ul>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">B. E-Commerce: Elasticity at Scale</h3>
              <h4 className="text-xl font-semibold mb-3">Black Friday Survival:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>Auto-Scaling:</strong> KEDA (Kubernetes Event-Driven Autoscaling) triggers from Redis queue depth</li>
                <li><strong>Case Study:</strong> Alibaba handles 583k orders/sec during Singles' Day via 15,000-node K8s cluster</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Deployment Strategies:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                <li><strong>Canary:</strong> Istio service mesh shifts 5% traffic to new cart microservice</li>
                <li><strong>Blue/Green:</strong> Kubernetes Operators automate DNS cutovers</li>
              </ul>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">C. Media: Data-Intensive Workloads</h3>
              <h4 className="text-xl font-semibold mb-3">Video Processing Pipeline:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>Architecture:</strong> GPU-accelerated nodes for FFmpeg transcoding pods; Kafka streams for frame processing</li>
                <li><strong>Case Study:</strong> Netflix's Archer optimizes 1,000+ concurrent 4K streams using K8s-managed Spark jobs</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Personalization Engines:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                <li><strong>Stack:</strong> Fluentd + Elasticsearch for real-time viewer analytics; Kubeflow for recommendation model training</li>
              </ul>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">D. Healthcare: Regulated Workloads</h3>
              <h4 className="text-xl font-semibold mb-3">Medical Imaging AI:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>Workflow:</strong> DICOM data ingested → TensorFlow inference pods → HIPAA-compliant storage (MinIO CSI volumes)</li>
              </ul>
              <h4 className="text-xl font-semibold mb-3">Compliance Tooling:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                <li><strong>Policy Enforcement:</strong> Kyverno blocks non-compliant images; Falco runtime security for anomaly detection</li>
                <li><strong>Case Study:</strong> Philips HealthSuite uses K8s namespaces for per-hospital tenant isolation</li>
              </ul>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">E. Manufacturing & IIoT</h3>
              <h4 className="text-xl font-semibold mb-3">Edge Kubernetes:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                <li><strong>Stack:</strong> K3s on Raspberry Pi clusters; MQTT-to-Kubernetes bridge for sensor data</li>
                <li><strong>Use Case:</strong> Predictive maintenance with in-factory ML inference (TensorFlow Lite in containers)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#00ADB5] mb-6">III. Operational Benefits: Technical Execution</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">A. Environment Parity</h4>
                <h5 className="text-md font-semibold mb-2">Dev-Prod Consistency:</h5>
                <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                  <li><strong>Toolchain:</strong> Skaffold for local development → Tekton CI/CD pipelines → ArgoCD GitOps sync</li>
                  <li><strong>Infra-as-Code:</strong> Crossplane to provision cloud services (DBs, queues) via Kubernetes APIs</li>
                </ul>
              </div>
              
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">B. Self-Healing Systems</h4>
                <h5 className="text-md font-semibold mb-2">Implementation:</h5>
                <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                  <li>Liveness probes restart crashed payment service pods</li>
                  <li>Node auto-replacement via cluster API integration with cloud providers</li>
                </ul>
              </div>
              
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">C. GitOps Workflows</h4>
                <h5 className="text-md font-semibold mb-2">ArgoCD Pattern:</h5>
                <div className="bg-[#222831] rounded-lg p-4 border border-[#00ADB5]/30 mb-3">
                  <pre className="text-[#00ADB5] text-sm overflow-x-auto">
{`applicationSet:  
  generators:  
    - git:  
        repoURL: https://github.com/org/apps  
        directories:  
          - path: production/*`}
                  </pre>
                </div>
                <p className="text-[#EEEEEE]/80"><strong>Audit Trail:</strong> Git commit history as immutable change record for SOC2 compliance</p>
              </div>
              
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">D. Multi-Cluster Topologies</h4>
                <h5 className="text-md font-semibold mb-2">Patterns:</h5>
                <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                  <li><strong>Hub-Spoke:</strong> Central Rancher management for edge sites</li>
                  <li><strong>Mesh:</strong> Istio multi-cluster service discovery across regions</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#00ADB5] mb-6">IV. Emerging Architectures & Innovations</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">A. Serverless Containers</h4>
                <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                  <li><strong>Knative:</strong> Autoscale-to-zero for batch processing; event-driven video thumbnail generation</li>
                  <li><strong>AWS App Runner/Google Cloud Run:</strong> Abstracted orchestration for microservices</li>
                </ul>
              </div>
              
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">B. Confidential Containers</h4>
                <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                  <li><strong>Tech:</strong> Intel SGX/TDX for encrypted memory; Kata Containers VM isolation</li>
                  <li><strong>Use Case:</strong> Processing PHI data in untrusted clouds</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#00ADB5] mb-6">V. Challenges & Mitigations</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-[#00ADB5]/30">
                <thead>
                  <tr className="bg-[#00ADB5]/10">
                    <th className="border border-[#00ADB5]/30 p-3 text-left">Challenge</th>
                    <th className="border border-[#00ADB5]/30 p-3 text-left">Solution</th>
                    <th className="border border-[#00ADB5]/30 p-3 text-left">Tooling</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#00ADB5]/30 p-3">Stateful Apps</td>
                    <td className="border border-[#00ADB5]/30 p-3">Operator pattern + cloud-native storage</td>
                    <td className="border border-[#00ADB5]/30 p-3">Rook (Ceph), Portworx</td>
                  </tr>
                  <tr>
                    <td className="border border-[#00ADB5]/30 p-3">Networking Complexity</td>
                    <td className="border border-[#00ADB5]/30 p-3">Service mesh + eBPF acceleration</td>
                    <td className="border border-[#00ADB5]/30 p-3">Cilium, Istio</td>
                  </tr>
                  <tr>
                    <td className="border border-[#00ADB5]/30 p-3">Security Vulnerabilities</td>
                    <td className="border border-[#00ADB5]/30 p-3">Image scanning + runtime protection</td>
                    <td className="border border-[#00ADB5]/30 p-3">Trivy, Clair, Falco</td>
                  </tr>
                  <tr>
                    <td className="border border-[#00ADB5]/30 p-3">Multi-Cloud Complexity</td>
                    <td className="border border-[#00ADB5]/30 p-3">Cluster API abstraction</td>
                    <td className="border border-[#00ADB5]/30 p-3">Cluster API, Crossplane</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-[#00ADB5] mb-6">VI. Future Outlook</h2>
            <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-8">
              <li><strong>WebAssembly (Wasm):</strong> 100ms cold-start containers via WasmEdge K8s runtime</li>
              <li><strong>eBPF Revolution:</strong> Kernel-level observability replacing sidecars (Cilium Hubble)</li>
              <li><strong>AI Integration:</strong> KubeFlow pipelines for generative AI model serving</li>
              <li><strong>Sustainable Computing:</strong> K8s vertical autoscaling to reduce carbon footprint</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#00ADB5] mb-6">Strategic Recommendations</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Start Here:</h4>
                <p className="text-[#EEEEEE]/80">Containerize stateless services first; use Operators for stateful apps</p>
              </div>
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Avoid Pitfalls:</h4>
                <p className="text-[#EEEEEE]/80">Enforce resource limits to prevent "noisy neighbor" issues</p>
              </div>
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Skills Investment:</h4>
                <p className="text-[#EEEEEE]/80">Certify teams in CKA/CKAD; implement chaos engineering (LitmusChaos)</p>
              </div>
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Cost Control:</h4>
                <p className="text-[#EEEEEE]/80">FinOps integration with OpenCost for cluster spend visibility</p>
              </div>
            </div>

            <div className="bg-[#00ADB5]/10 rounded-lg p-6 border border-[#00ADB5]/30 mb-8">
              <h4 className="text-lg font-semibold mb-3">2025 Trend:</h4>
              <p className="text-[#EEEEEE]/80">AI-Driven Orchestration – K8s schedulers predicting pod placement using ML (e.g., DeepSquare for HPC)</p>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Conclusion</h3>
              <p className="text-[#EEEEEE]/80">
                Containerization and Kubernetes orchestration have become the foundation for modern application deployment across industries. The key is aligning technology choices with business requirements while building operational expertise through hands-on experience and continuous learning.
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  )
}

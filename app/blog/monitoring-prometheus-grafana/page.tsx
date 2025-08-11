'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2, LineChart, Calendar, User, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function MonitoringPrometheusGrafana() {
  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Monitoring with Prometheus & Grafana', url })
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
              <LineChart className="mr-2 h-4 w-4" /> Observability
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Monitoring Tools: <span className="text-[#00ADB5]">Prometheus</span> & <span className="text-[#00ADB5]">Grafana</span>
            </h1>
            <p className="text-xl text-[#EEEEEE]/70 mb-8 leading-relaxed">
              Metrics, alerting, and dashboards used by SRE teams to keep production reliable.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#EEEEEE]/60">
              <div className="flex items-center"><User className="mr-2 h-4 w-4" /> Yash Gupta</div>
              <div className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> Aug 2025</div>
              <div className="flex items-center"><Clock className="mr-2 h-4 w-4" /> 8 min read</div>
            </div>
          </motion.div>

          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl mx-auto prose prose-invert prose-lg mt-12">
            
            <h2 className="text-3xl font-bold text-[#00ADB5] mb-6">Prometheus Deep Dive</h2>
            
            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Architecture & Key Components:</h3>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>Pull Model:</strong> Targets are scraped at defined intervals (configurable via scrape_configs). Overcomes ephemeral IP issues in dynamic environments</li>
                <li><strong>Service Discovery:</strong> Integrates with Kubernetes, Consul, AWS EC2, etc., to auto-detect monitoring targets</li>
                <li><strong>Storage:</strong> Time-series database (TSDB) with local on-disk storage. Data retention policies (default 15d) and block compaction</li>
                <li><strong>Pushgateway:</strong> For short-lived jobs (e.g., cron jobs) that can't be scraped directly</li>
                <li><strong>Exporters:</strong> 900+ community exporters (e.g., Node Exporter for OS metrics, JMX Exporter for Java apps)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Advanced PromQL:</h3>
            <div className="bg-[#222831] rounded-lg p-6 border border-[#00ADB5]/30 mb-8">
              <pre className="text-[#00ADB5] text-sm overflow-x-auto">
{`# Error rate (5m) for HTTP 500 responses
rate(http_requests_total{status="500"}[5m])

# Prediction: Disk space exhaustion in 4h
predict_linear(node_filesystem_free_bytes[6h], 4*3600) < 0

# SLO Compliance: 99.9% success rate over 28d
avg_over_time(up{job="api"}[28d]) > 0.999`}
              </pre>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Limitations & Solutions:</h3>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                <li><strong>Scalability:</strong> Federated Prometheus for hierarchical aggregation (e.g., regional → global)</li>
                <li><strong>Long-term Storage:</strong> Integrate with Thanos, Cortex, or Mimir for infinite retention</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Grafana Advanced Implementation</h3>
            
            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h4 className="text-xl font-semibold mb-3">Dynamic Dashboards:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>Variables:</strong> Create dropdowns for environment (env=prod|staging), service, or datacenter</li>
                <li><strong>Annotations:</strong> Overlay deployment events or incidents from CI/CD pipelines (e.g., via webhooks)</li>
                <li><strong>Mixed Data Sources:</strong> Correlate Prometheus metrics with Loki logs or Tempo traces</li>
              </ul>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h4 className="text-xl font-semibold mb-3">SLO Visualization:</h4>
              <p className="text-[#EEEEEE]/80 mb-4">Define SLI (e.g., HTTP success rate > 99.95%). Configure error budget burn rate in Grafana:</p>
              <div className="bg-[#222831] rounded-lg p-6 border border-[#00ADB5]/30 mb-4">
                <pre className="text-[#00ADB5] text-sm overflow-x-auto">
{`# Error budget remaining
(1 - (sum(increase(http_requests_failed_total[7d])) / sum(increase(http_requests_total[7d]))) - 0.9995`}
                </pre>
              </div>
              <p className="text-[#EEEEEE]/80">Alert when budget consumption exceeds 2% per hour.</p>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h4 className="text-xl font-semibold mb-3">Alerting Pipeline:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                <li><strong>Grafana Alert Rules:</strong> Multi-dimensional (e.g., cluster=eu-west, app=payment)</li>
                <li><strong>Notification Policies:</strong> Route critical alerts to PagerDuty/Slack, low-priority to email</li>
                <li><strong>Silencing:</strong> Mute alerts during maintenance windows</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Advanced Use Cases</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">1. Kubernetes & Cloud-Native Monitoring</h4>
                <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                  <li><strong>Control Plane:</strong> Monitor etcd latency, API server errors, scheduler queue depth</li>
                  <li><strong>Workloads:</strong> Track HPA scaling events, OOMKills, PVC capacity</li>
                  <li><strong>Custom Metrics:</strong> Expose app metrics (e.g., orders_processed_sec) for autoscaling</li>
                </ul>
                <p className="text-[#EEEEEE]/80 mt-3"><strong>Example Dashboard:</strong> Per-namespace resource usage, ingress error rates, CRD health</p>
              </div>
              
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">2. Distributed Tracing Integration</h4>
                <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                  <li><strong>OpenTelemetry Collector:</strong> Ingest traces → Tempo/Jaeger</li>
                  <li><strong>Grafana Explore:</strong> Jump from Prometheus metric spike (e.g., high latency) to correlated traces</li>
                </ul>
              </div>
              
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">3. Business KPI Monitoring</h4>
                <p className="text-[#EEEEEE]/80 mb-3"><strong>Metric Examples:</strong></p>
                <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                  <li>cart_abandonment_rate</li>
                  <li>user_signups_per_minute</li>
                  <li>payment_failure_rate</li>
                </ul>
                <p className="text-[#EEEEEE]/80 mt-3"><strong>ETL Pipeline:</strong> Ingest business metrics via Pushgateway or custom exporter</p>
              </div>
              
              <div className="bg-[#393E46]/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">4. Multi-Cluster / Hybrid Cloud</h4>
                <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                  <li><strong>Thanos Setup:</strong> Global query layer across 10+ Prometheus instances</li>
                  <li><strong>Grafana Data Sources:</strong> Unified view of on-prem + AWS/GCP/Azure metrics</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">SRE Best Practices</h3>
            
            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h4 className="text-xl font-semibold mb-3">Define Critical Dashboards:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li><strong>Golden Signals:</strong> Traffic, Error Rate, Latency, Saturation (USE/RED methods)</li>
                <li><strong>Dependency Map:</strong> Service topology with upstream/downstream health</li>
              </ul>
              
              <h4 className="text-xl font-semibold mb-3">Alert Design:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-4">
                <li>Avoid "alert storms" – aggregate using sum() or max()</li>
                <li>Use multi-window burn-rate alerts for SLOs</li>
              </ul>
              
              <h4 className="text-xl font-semibold mb-3">Runbook Integration:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                <li>Link Grafana alerts to Confluence/Squadcast runbooks</li>
                <li>Example: "High CPU → Check runbook #23 for node diagnostics"</li>
              </ul>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h4 className="text-xl font-semibold mb-3">Chaos Engineering:</h4>
              <p className="text-[#EEEEEE]/80">Monitor Gremlin/Chaos Mesh experiments in real-time dashboards</p>
            </div>

            <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Emerging Trends</h3>
            <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2 mb-8">
              <li><strong>eBPF Integration:</strong> Monitor network/security via Pixie or Kindling exporters</li>
              <li><strong>Continuous Profiling:</strong> Pyroscope/Phlare integration with Grafana</li>
              <li><strong>AIOPs:</strong> Anomaly detection using Grafana ML (e.g., predict_linear deviations)</li>
            </ul>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Security Hardening:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Prometheus:</h4>
                  <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                    <li>TLS/mTLS for scrape endpoints</li>
                    <li>RBAC via Kubernetes ServiceAccounts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Grafana:</h4>
                  <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                    <li>SAML/OAuth</li>
                    <li>Dashboard permissions</li>
                    <li>Encrypted credentials</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#00ADB5]/10 rounded-lg p-6 border border-[#00ADB5]/30 mb-8">
              <h4 className="text-lg font-semibold mb-3">Optimization Tips:</h4>
              <ul className="list-disc ml-6 text-[#EEEEEE]/80 space-y-2">
                <li>Reduce metric cardinality (avoid high-cardinality labels like user_id)</li>
                <li>Use recording rules for expensive PromQL queries</li>
                <li>Configure blocked_exporters in Grafana to limit data source access</li>
              </ul>
            </div>

            <div className="bg-[#393E46]/30 rounded-lg p-8 border border-[#00ADB5]/20">
              <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">Conclusion</h3>
              <p className="text-[#EEEEEE]/80">
                This extended guide equips SREs to implement production-grade observability with Prometheus & Grafana, covering everything from architecture nuances to real-world incident management workflows.
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  )
}

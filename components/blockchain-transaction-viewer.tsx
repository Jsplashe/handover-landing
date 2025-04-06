"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Shield, Copy, ExternalLink, CheckCircle, Clock, QrCode, Coins } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface BlockchainTransactionViewerProps {
  transactionHash?: string
  status?: "verified" | "pending"
  timestamp?: string
  className?: string
  isPanel?: boolean
}

export default function BlockchainTransactionViewer({
  transactionHash = "0x7f9e8d7c6b5a4e3f2d1c0b9a8e7d6c5f4e3d2b1a",
  status = "verified",
  timestamp = "March 15, 2023 - 10:30 AM",
  className,
  isPanel = false,
}: BlockchainTransactionViewerProps) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("details")

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transactionHash)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const blockExplorerUrl = `https://polygonscan.com/tx/${transactionHash}`

  // Mock transaction data
  const transactionData = {
    network: "Polygon",
    blockNumber: "28405193",
    fee: "0.00042 MATIC",
    gasUsed: "42,000",
    confirmations: "24",
  }

  const TransactionContent = () => (
    <>
      <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="qrcode">QR Code</TabsTrigger>
          <TabsTrigger value="raw">Raw Data</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4 pt-4">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Transaction Hash</p>
              <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-md overflow-hidden">
                <p className="font-mono text-sm truncate">{transactionHash}</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={copyToClipboard}>
                        {copied ? <CheckCircle className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copied ? "Copied!" : "Copy to clipboard"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Status</p>
                <Badge className={status === "verified" ? "bg-emerald-500" : "bg-amber-500"}>
                  {status === "verified" ? "Verified" : "Pending"}
                </Badge>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Network</p>
                <p>{transactionData.network}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Block</p>
                <p>{transactionData.blockNumber}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Timestamp</p>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <p>{timestamp}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Transaction Fee</p>
                <div className="flex items-center gap-1">
                  <Coins className="h-4 w-4 text-muted-foreground" />
                  <p>{transactionData.fee}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Confirmations</p>
                <p>{transactionData.confirmations}</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="qrcode" className="flex justify-center py-6">
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg inline-block mb-2">
              <QrCode className="h-32 w-32 text-gray-800" />
            </div>
            <p className="text-sm text-muted-foreground">Scan to view transaction on block explorer</p>
          </div>
        </TabsContent>

        <TabsContent value="raw" className="pt-4">
          <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
            <pre className="text-xs font-mono">
              {`{
  "hash": "${transactionHash}",
  "blockNumber": ${transactionData.blockNumber},
  "timestamp": "${timestamp}",
  "from": "0x3a4e8c3b0a780e09489d86e4b2e6111db81c86a5",
  "to": "0x7a4e8c3b0a780e09489d86e4b2e6111db81c86a5",
  "value": "0",
  "gasUsed": ${transactionData.gasUsed.replace(",", "")},
  "status": "${status}",
  "confirmations": ${transactionData.confirmations}
}`}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </>
  )

  if (isPanel) {
    return (
      <Card className={className}>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-600" />
            <CardTitle>Blockchain Verification</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <TransactionContent />
        </CardContent>
        <CardFooter className="border-t pt-4">
          <Button className="w-full gap-2" variant="outline" asChild>
            <a href={blockExplorerUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              View on Block Explorer
            </a>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Shield className="h-4 w-4" />
          View Blockchain Proof
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-600" />
            Blockchain Verification
          </DialogTitle>
          <DialogDescription>
            This handover has been verified on the blockchain, creating an immutable record.
          </DialogDescription>
        </DialogHeader>
        <div className="py-2">
          <TransactionContent />
        </div>
        <div className="flex justify-end mt-4">
          <Button className="gap-2" variant="outline" asChild>
            <a href={blockExplorerUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              View on Block Explorer
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}


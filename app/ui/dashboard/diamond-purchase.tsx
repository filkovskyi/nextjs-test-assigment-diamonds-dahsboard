'use client'

import { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CurrencyDollarIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useDiamondStore } from '@/app/store/diamond-store'

export default function DiamondPurchase() {
  const [selectedAmount, setSelectedAmount] = useState('')
  const { data: session } = useSession()
  const { balance, addDiamonds, resetBalance, initializeBalance } = useDiamondStore()

  useEffect(() => {
    if (session?.user?.email) {
      initializeBalance(session.user.email)
    }
  }, [session?.user?.email, initializeBalance])

  const handlePurchase = () => {
    const amount = parseInt(selectedAmount, 10)
    if (!isNaN(amount) && amount > 0) {
      addDiamonds(amount)
      setSelectedAmount('')
    }
  }

  if (!session?.user) return null

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Diamond Store</CardTitle>
        <CardDescription>Purchase premium diamonds to enhance your experience!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold">Your Balance:</span>
          <span className="text-2xl font-bold flex items-center">
            {balance}
            <CurrencyDollarIcon className="h-6 w-6 ml-2 text-blue-500" />
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <Select value={selectedAmount} onValueChange={setSelectedAmount}>
            <SelectTrigger>
              <SelectValue placeholder="Select amount" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 Diamonds</SelectItem>
              <SelectItem value="50">50 Diamonds</SelectItem>
              <SelectItem value="100">100 Diamonds</SelectItem>
              <SelectItem value="500">500 Diamonds</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Or enter custom amount"
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(e.target.value)}
              className="flex-grow"
            />
            <Button 
              onClick={handlePurchase} 
              className="bg-blue-600 hover:bg-blue-700"
              disabled={!selectedAmount}
            >
              Buy
            </Button>
          </div>
          <Button onClick={resetBalance} className="w-full bg-red-600 hover:bg-red-700 flex items-center justify-center">
            <TrashIcon className="mr-2 h-4 w-4" /> Reset Balance
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
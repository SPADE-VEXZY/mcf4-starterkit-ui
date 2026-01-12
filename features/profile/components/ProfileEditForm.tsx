"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'

const ProfileEditForm = () => {
  return (
    <div className="max-w-xl space-y-10">
        <div className='space-y-6'>
            <div className='space-y-1'>
                <h2 className="text-xl">Profile information</h2>
                <p className="text-sm text-muted-foreground">
                    Update your name and email address
                </p>
            </div>
            <form>
                <div className='space-y-6'>
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="user" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">Email Address</Label>
                        <Input id="email" defaultValue="user@gmail.com" />
                    </div>
                    <Button type='submit' className="p-4" >Save</Button>
                </div>
            </form>
        </div>
        {/* Delete Account */}
      <div className="space-y-6">
        <div className='space-y-1'>
          <h3 className="text-xl">Delete account</h3>
          <p className="text-sm text-muted-foreground">
            Delete your account and all of its resources
          </p>
        </div>

        <Card className="border-red-200 bg-red-50">
          <CardContent className="">
            <div className='space-y-1'>
              <p className="text-red-600 text-sm font-semibold">Warning</p>
              <p className="text-sm text-red-500">
                Please proceed with caution, this cannot be undone.
              </p>
            </div>

            <Button className="bg-red-500 mt-5" >
              Delete account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ProfileEditForm
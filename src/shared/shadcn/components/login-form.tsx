import { ComponentProps } from 'react';
import { cn } from '@/shared/shadcn/lib/utils';
import { Button } from '@/shared/shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/shadcn/components/ui/card';
import { Input } from '@/shared/shadcn/components/ui/input';
import { Label } from '@/shared/shadcn/components/ui/label';
import { Loader2 } from 'lucide-react';

interface LoginFormProps extends ComponentProps<'div'> {
  isLoading?: boolean;
}

export function LoginForm({ className, isLoading, ...props }: LoginFormProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="username">Email</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder={'Password'}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {isLoading && <Loader2 className="animate-spin" />}
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

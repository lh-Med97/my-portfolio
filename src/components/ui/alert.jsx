import React from 'react';

// Alert
export const Alert = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`rounded-md bg-blue-50 p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// AlertTitle
export const AlertTitle = ({
  children,
  className,
  ...props
}) => {
  return (
    <h4
      className={`text-sm font-semibold text-blue-800 ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
};

// AlertDescription
export const AlertDescription = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={`mt-1 text-sm text-blue-700 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

// AlertDialog
export const AlertDialog = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto ${className}`}
      {...props}
    >
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
          {children}
        </div>
      </div>
    </div>
  );
};

// AlertDialogAction
export const AlertDialogAction = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
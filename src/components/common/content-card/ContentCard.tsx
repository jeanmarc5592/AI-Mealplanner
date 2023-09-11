import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export interface ContentCardProps {
  title: string;
  subTitle?: string | React.ReactNode;
  children: React.ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, subTitle, children}) => {
  return (
    <Card sx={{ padding: 0 }}>
      <CardHeader 
        sx={{ borderBottom: '1px solid lightgrey'}}
        titleTypographyProps={{ color: 'primary.main', fontSize: '1.5rem', fontWeight: 500 }} 
        title={title} 
        subheaderTypographyProps={{ color: 'primary.main' }}
        subheader={subTitle}
      />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

export default ContentCard
